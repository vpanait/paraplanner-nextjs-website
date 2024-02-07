"use client";
import { Box, Container, SxProps, Theme, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";

const items = [
  {
    "name": "PayPal",
    "logoUrl": "https://d1uuj3mi6rzwpm.cloudfront.net/logos/providers/xo/paypal_csv_xo.svg"
  },
  {
    "name": "Nordea Corporate",
    "logoUrl": "https://d1uuj3mi6rzwpm.cloudfront.net/logos/providers/dk/nordea_dk.svg"
  },
  {
    "name": "Nordea",
    "logoUrl": "https://d1uuj3mi6rzwpm.cloudfront.net/logos/providers/dk/nordea_dk.svg"
  },
  {
    "name": "Danske Bank Business",
    "logoUrl": "https://d1uuj3mi6rzwpm.cloudfront.net/logos/providers/gb/danske_bank_gb.svg"
  },
  {
    "name": "Wise (former Transferwise)",
    "logoUrl": "https://d1uuj3mi6rzwpm.cloudfront.net/logos/providers/xo/transferwise_xo.svg"
  },
  {
    "name": "Curve",
    "logoUrl": "https://d1uuj3mi6rzwpm.cloudfront.net/logos/providers/xf/placeholder_global.svg"
  },
  {
    "name": "Crypto.com",
    "logoUrl": "https://d1uuj3mi6rzwpm.cloudfront.net/logos/providers/mt/crypto_com_oauth_client_mt.svg"
  },
  {
    "name": "Bank Norwegian",
    "logoUrl": "https://d1uuj3mi6rzwpm.cloudfront.net/logos/providers/de/bank_norwegian_de.svg"
  },
  {
    "name": "Ikano Bank",
    "logoUrl": "https://d1uuj3mi6rzwpm.cloudfront.net/logos/providers/bg/ikano_finland_bg.svg"
  }
];

interface IProps {
  sx?: SxProps<Theme>;
}

const Carousel = ({ sx }: IProps) => {
  const theme = useTheme();
  const interval = useRef<NodeJS.Timeout>();

  const onMouseEnterHandler = () => {
    clearInterval(interval.current);
  };

  const onMouseLeaveHandler = () => {
    if (interval.current) {
      clearInterval(interval.current);
    }
    interval.current = setInterval(slideToNextItem, 3000);
  };

  const { carouselFragment, slideToNextItem } = useSpringCarousel({
    itemsPerSlide: 9,
    withLoop: true,
    gutter: 24,
    items: items?.map((item, index) => ({
      id: index.toString(),
      renderItem: (
        <div
          key={item.name}
          // className={styles.Item}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}>
          <Box
            component="img"
            sx={{
              maxWidth: { xs: 1 },
              height: 84,
              opacity: 0.8,
              filter: 'grayscale(1)',
              transition: 'all 300ms ease-out',
              "&:hover": {
                opacity: 1,
                filter: 'grayscale(0)',
                transition: 'all 300ms ease-in',
                transform: 'scale(1.15)'
              }
            }}
            src={item.logoUrl}
          />
          {/* <img
            src={item.logoUrl}
            alt={item.name}
            onDragStart={(event) => {
              event.preventDefault();
              return false;
            }}

          /> */}
        </div>
      ),
    })),
  });

  useEffect(() => {
    interval.current = setInterval(slideToNextItem, 3000);
    return () => {
      clearInterval(interval.current);
    };
  }, [slideToNextItem]);


  return (
    <Container maxWidth={false} sx={{ backgroundColor: 'primary.main', overflow: 'hidden', paddingY: 2, ...sx }}>
      {carouselFragment}
    </Container>
  );
};

export default Carousel;