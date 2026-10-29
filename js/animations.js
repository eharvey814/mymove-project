/* MYMOVE step animations: one frame sheet per animation in assets/moves/<name>.webp.
   frames = frames in the sheet (8 per row, 400 x 225 each); cycle = seconds for one loop,
   which is one rep or one breath for counted steps; mirror: "vertical" flips top-to-bottom for side 2.
   Generated from the animation source. */
const ANIM_SHEET = { cols: 8, width: 400, height: 225 };
const ANIMS = {
  "arm-circles": {
    "frames": 51,
    "cycle": 6.4
  },
  "arm-swings": {
    "frames": 26,
    "cycle": 2.2
  },
  "bench-dips": {
    "frames": 31,
    "cycle": 2.6
  },
  "bench-incline-push-ups": {
    "frames": 31,
    "cycle": 2.6
  },
  "bench-step-ups": {
    "frames": 64,
    "cycle": 8.0
  },
  "box-breathing": {
    "frames": 128,
    "cycle": 16.0
  },
  "butt-kicks": {
    "frames": 17,
    "cycle": 1.4
  },
  "calf-hamstring-stretch": {
    "frames": 64,
    "cycle": 8.0
  },
  "calf-raises": {
    "frames": 48,
    "cycle": 4.0
  },
  "cat-cow": {
    "frames": 60,
    "cycle": 5.0
  },
  "chest-opener": {
    "frames": 80,
    "cycle": 10.0
  },
  "childs-pose": {
    "frames": 64,
    "cycle": 8.0
  },
  "dance-groove": {
    "frames": 11,
    "cycle": 0.9
  },
  "dance-march-clap": {
    "frames": 19,
    "cycle": 1.6
  },
  "dance-step-touch": {
    "frames": 17,
    "cycle": 1.4
  },
  "dance-sway": {
    "frames": 24,
    "cycle": 2.0
  },
  "doorway-stretch": {
    "frames": 80,
    "cycle": 10.0
  },
  "hamstring-stretch": {
    "frames": 64,
    "cycle": 8.0
  },
  "hip-flexor-stretch": {
    "frames": 48,
    "cycle": 4.0
  },
  "knee-drives": {
    "frames": 19,
    "cycle": 1.6
  },
  "knee-hugs": {
    "frames": 58,
    "cycle": 7.2
  },
  "knee-to-chest": {
    "frames": 64,
    "cycle": 8.0
  },
  "lie-and-breathe": {
    "frames": 54,
    "cycle": 4.5
  },
  "lunges": {
    "frames": 38,
    "cycle": 3.2
  },
  "march-in-place": {
    "frames": 19,
    "cycle": 1.6
  },
  "march-slow": {
    "frames": 31,
    "cycle": 2.6
  },
  "neck-rolls": {
    "frames": 96,
    "cycle": 12.0
  },
  "pick-songs": {
    "frames": 14,
    "cycle": 1.2
  },
  "plank": {
    "frames": 36,
    "cycle": 3.0
  },
  "push-ups": {
    "frames": 31,
    "cycle": 2.6
  },
  "quad-stretch": {
    "frames": 36,
    "cycle": 3.0
  },
  "reach-and-touch-toes": {
    "frames": 64,
    "cycle": 8.0
  },
  "reach-overhead": {
    "frames": 128,
    "cycle": 16.0
  },
  "seated-forward-fold": {
    "frames": 64,
    "cycle": 8.0
  },
  "seated-side-stretch": {
    "frames": 96,
    "cycle": 12.0
  },
  "seated-twist": {
    "frames": 80,
    "cycle": 10.0
  },
  "shoulder-rolls": {
    "frames": 29,
    "cycle": 2.4
  },
  "side-bend": {
    "frames": 96,
    "cycle": 12.0
  },
  "slow-breaths": {
    "frames": 64,
    "cycle": 8.0
  },
  "slow-squats": {
    "frames": 53,
    "cycle": 4.4
  },
  "squats": {
    "frames": 26,
    "cycle": 2.2
  },
  "stairs-up": {
    "frames": 22,
    "cycle": 1.8
  },
  "step-jacks": {
    "frames": 29,
    "cycle": 2.4
  },
  "supine-twist": {
    "frames": 64,
    "cycle": 8.0,
    "mirror": "vertical"
  },
  "treadmill-cool-down": {
    "frames": 24,
    "cycle": 2.0
  },
  "treadmill-flat": {
    "frames": 17,
    "cycle": 1.4
  },
  "treadmill-incline": {
    "frames": 19,
    "cycle": 1.6
  },
  "treadmill-incline-press": {
    "frames": 18,
    "cycle": 1.5
  },
  "treadmill-incline-press-more": {
    "frames": 19,
    "cycle": 1.6
  },
  "upper-back-stretch": {
    "frames": 64,
    "cycle": 8.0
  },
  "walk-arm-swing": {
    "frames": 12,
    "cycle": 1.0
  },
  "walk-bottle": {
    "frames": 17,
    "cycle": 1.4
  },
  "walk-brisk": {
    "frames": 12,
    "cycle": 1.0
  },
  "walk-easy": {
    "frames": 17,
    "cycle": 1.4
  },
  "walk-listen": {
    "frames": 17,
    "cycle": 1.4
  },
  "walk-look": {
    "frames": 34,
    "cycle": 2.8
  },
  "walk-slow": {
    "frames": 24,
    "cycle": 2.0
  },
  "desk-push-ups": {
    "frames": 31,
    "cycle": 2.6
  },
  "triceps-stretch": {
    "frames": 80,
    "cycle": 10.0
  }
};
