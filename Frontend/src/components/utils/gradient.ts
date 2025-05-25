export interface GradientDef {
  name: string;
  style: React.CSSProperties;
}

export const gradients: GradientDef[] = [
  {
    name: "dark-gradient",
    style: {
      backgroundImage: `
        radial-gradient(
          circle at 10% 20%,
          rgba(141, 11, 206, 0.2),
          rgba(202, 43, 157, 0) 20%
        ),
        radial-gradient(
          circle at 80% 20%,
          rgba(141, 11, 206, 0.2),
          rgba(202, 43, 157, 0) 20%
        ),
        radial-gradient(
          circle at 60% 95%,
          rgba(141, 11, 206, 0.2),
          rgba(202, 43, 157, 0) 20%
        ),
        linear-gradient(
          90deg,
          #1D2948 0%,
          #141D33 25%,
          #0F1628 38%,
          #050A16 100%
        )
      `,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  {
    name: "orange-gradient",
    style: {
      backgroundImage: `
        radial-gradient(circle at 10% 20%, rgba(130, 77, 4, 0.2), rgba(224, 151, 4, 0) 20%),
        radial-gradient(
          circle at 80% 20%,
          rgba(130, 66, 14, 0.2),
          rgba(130, 66, 14, 0) 20%
        ),
        radial-gradient(
          circle at 60% 95%,
          rgba(130, 66, 14, 0.2),
          rgba(130, 66, 14, 0) 20%
        ),
        linear-gradient(
          90deg,
          #1D2948 0%,
          #141D33 25%,
          #0F1628 38%,
          #050A16 100%
        )
      `,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  {
    name: "dusk-gradient",
    style: {
      backgroundImage: `
        radial-gradient(
            circle at 10% 20%,
            rgba(103, 65, 1, 0.775)
            rgba(86, 64, 20, 0.705) 20%
        ),
        radial-gradient(
          circle at 80% 20%,
          rgba(103, 65, 1, 0.775)
          rgba(86, 64, 20, 0.705) 20%
        ),
        radial-gradient(
          circle at 60% 95%,
          rgba(103, 65, 1, 0.775)
          rgba(86, 64, 20, 0.705) 20%
        ),
        linear-gradient(
          90deg,
          #1D2948 0%,
          #141D33 25%,
          #0F1628 38%,
          #050A16 100%
        )
      `,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
];
