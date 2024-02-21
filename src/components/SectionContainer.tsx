"use client"
import { Grid, SxProps, Theme } from "@mui/material";
import { RefObject, useEffect } from "react";
import { animated, useInView, useSpring } from "@react-spring/web";
import { CONTENT_WRAPPER_HIDDEN_ANIMATION, CONTENT_WRAPPER_PADDING_Y, CONTENT_WRAPPER_VISIBLE_ANIMATION } from "@/utils/constants";



interface IProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  innerSx?: SxProps<Theme>;
  sectionRef?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined,
  withoutAnimation?: boolean
  disablePaddingY?: boolean
}

const SectionContainer = ({
  children,
  sx,
  innerSx,
  sectionRef,
  withoutAnimation = false,
  disablePaddingY = false
}: IProps) => {

  const [ref, inView] = useInView({ amount: 0.01 });
  const [animatedStyles, api] = useSpring(() => ({
    from: withoutAnimation ? CONTENT_WRAPPER_VISIBLE_ANIMATION : CONTENT_WRAPPER_HIDDEN_ANIMATION,
    height: '100%'
  }));

  useEffect(() => {
    if (!withoutAnimation && inView) {
      api.start({
        to: CONTENT_WRAPPER_VISIBLE_ANIMATION,
        config: {
          mass: 1,
          tension: 280,
          friction: 60,
        },
      });
    }
  }, [withoutAnimation, inView, api]);

  return (
    <Grid
      container
      ref={sectionRef}
      sx={{
        ...(!disablePaddingY && {
          paddingY: { xs: `${CONTENT_WRAPPER_PADDING_Y / 2}px`, sm: `${CONTENT_WRAPPER_PADDING_Y}px` }
        }),
        ...sx
      }}
    >
      <Grid item lg={1.5} md={0.5} sm={0.5} xs={0.25} />
      <Grid item lg={9} md={11} sm={11} xs={11.5} sx={innerSx}>
        {withoutAnimation ? (
          <>{children}</>
        ) : (
          <animated.div ref={ref} style={animatedStyles}>
            {children}
          </animated.div>
        )}
      </Grid>
      <Grid item lg={1.5} md={0.5} sm={0.5} xs={0.25} />
    </Grid >
  );
};

export default SectionContainer;