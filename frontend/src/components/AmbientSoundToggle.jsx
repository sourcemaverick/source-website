import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Binaural drone toggle. Web Audio only — no audio files needed.
 * Two slightly detuned sine oscillators (110 Hz + 116 Hz) create a
 * ~6 Hz beat frequency that reads as calming binaural under the hero.
 * A low-pass filter softens the top end, a slow LFO gently breathes the
 * gain so it never feels static, and the master gain fades in / out.
 */
export const AmbientSoundToggle = ({ className = "" }) => {
  const [on, setOn] = useState(false);
  const ctxRef = useRef(null);
  const nodesRef = useRef(null);

  useEffect(() => {
    return () => {
      // Full teardown when the component unmounts
      if (ctxRef.current) {
        try { ctxRef.current.close(); } catch (_) {}
        ctxRef.current = null;
        nodesRef.current = null;
      }
    };
  }, []);

  const ensureGraph = () => {
    if (ctxRef.current) return nodesRef.current;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;

    const ctx = new AudioCtx();
    ctxRef.current = ctx;

    // Two carriers, slight detune for a soft binaural pulse
    const oscL = ctx.createOscillator();
    const oscR = ctx.createOscillator();
    oscL.type = "sine";
    oscR.type = "sine";
    oscL.frequency.value = 110;
    oscR.frequency.value = 116;

    // Very quiet warm harmonic
    const oscHarm = ctx.createOscillator();
    oscHarm.type = "sine";
    oscHarm.frequency.value = 220;

    // Panners split channels
    const panL = ctx.createStereoPanner();
    const panR = ctx.createStereoPanner();
    const panH = ctx.createStereoPanner();
    panL.pan.value = -0.7;
    panR.pan.value = 0.7;
    panH.pan.value = 0;

    // Warm low-pass
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 700;
    filter.Q.value = 0.7;

    // Master gain (0 until toggled on)
    const master = ctx.createGain();
    master.gain.value = 0;

    // Slow breathing LFO on the master gain
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.08; // ~12s cycle
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.04; // subtle modulation depth

    // Individual voice gains
    const gL = ctx.createGain();
    const gR = ctx.createGain();
    const gH = ctx.createGain();
    gL.gain.value = 1;
    gR.gain.value = 1;
    gH.gain.value = 0.25;

    // Wire graph
    oscL.connect(gL).connect(panL).connect(filter);
    oscR.connect(gR).connect(panR).connect(filter);
    oscHarm.connect(gH).connect(panH).connect(filter);
    filter.connect(master).connect(ctx.destination);

    // LFO -> master gain (additive modulation)
    lfo.connect(lfoGain).connect(master.gain);

    oscL.start();
    oscR.start();
    oscHarm.start();
    lfo.start();

    nodesRef.current = { ctx, master };
    return nodesRef.current;
  };

  const fadeTo = (value, seconds = 1.2) => {
    const nodes = nodesRef.current;
    if (!nodes) return;
    const { ctx, master } = nodes;
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.linearRampToValueAtTime(value, now + seconds);
  };

  const toggle = async () => {
    const graph = ensureGraph();
    if (!graph) return;
    const { ctx } = graph;
    if (ctx.state === "suspended") {
      try { await ctx.resume(); } catch (_) {}
    }
    if (!on) {
      fadeTo(0.075, 1.4);
      setOn(true);
    } else {
      fadeTo(0, 1.2);
      setOn(false);
    }
  };

  return (
    <button
      type="button"
      data-testid="ambient-sound-toggle"
      aria-label={on ? "Turn off ambient sound" : "Turn on ambient sound"}
      aria-pressed={on}
      onClick={toggle}
      className={`sound-toggle relative flex h-8 w-8 items-center justify-center rounded-full transition-colors ${className}`}
    >
      {on && (
        <span className="sound-toggle-ripple pointer-events-none absolute inset-0 rounded-full" />
      )}
      <AnimatePresence mode="wait" initial={false}>
        {on ? (
          <motion.span
            key="on"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Volume2 className="h-4 w-4 text-[color:var(--gold)]" strokeWidth={1.4} />
          </motion.span>
        ) : (
          <motion.span
            key="off"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <VolumeX className="h-4 w-4 text-white/55" strokeWidth={1.4} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
