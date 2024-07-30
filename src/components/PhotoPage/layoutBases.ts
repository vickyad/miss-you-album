export const layouts = [
  {
    layout: "one",
    photos: [
      {
        style: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
      },
    ],
  },
  {
    layout: "two",
    photos: [
      { style: { bottom: "16rem", right: "5rem", transform: "rotate(10deg)" } },
      {
        style: {
          bottom: "1.5rem",
          right: "1.5rem",
          transform: "rotate(-2deg)",
        },
      },
    ],
  },
  {
    layout: "three",
    photos: [
      { style: { bottom: "16rem", left: "5rem", transform: "rotate(-8deg)" } },
      {
        style: { bottom: "1.5rem", left: "1.5rem", transform: "rotate(4deg)" },
      },
    ],
  },
  {
    layout: "four",
    photos: [
      {
        rotated: true,
        style: {
          top: "10%",
          left: "50%",
          transform: "translateX(-50%) rotate(2deg)",
        },
      },
      {
        rotated: true,
        style: {
          bottom: "12.5%",
          left: "50%",
          transform: "translateX(-50%) rotate(-1deg)",
        },
      },
    ],
  },
  {
    layout: "five",
    photos: [
      {
        rotated: true,
        style: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
      },
    ],
  },
];
