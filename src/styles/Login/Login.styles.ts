// styles/loginStyles/loginStyles.styles.ts
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Wrapper = styled(Box)({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f2f5",          // Light background
  fontFamily: "'Inter', sans-serif",
});

export const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "90%",
  maxWidth: 900,
  height: 500,                         // Fixed height for layout consistency
  borderRadius: theme.spacing(2),
  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  backgroundColor: "#fff",
}));

// Left side with hero gradient background (replacing ImageBox)
export const ImageBox = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "100%",
  background: 'linear-gradient(135deg, #506050, #304030)',  // Your gradient
  color: "#fff",
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
}));

export const HeroLogo = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: "50%",
  backgroundColor: "rgba(79,172,181,0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(2),
  fontWeight: "bold",
  fontSize: 28,
  userSelect: "none",
}));

export const FormBox = styled(Box)(({ theme }) => ({
  width: "50%",
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  maxWidth: 480,
}));

export const Title = styled(Typography)({
  fontWeight: 700,
  color: "#333",
});

export const Subtitle = styled(Typography)({
  color: "#666",
});

// Optional blur box effect inside ImageBox
export const BlurBox = styled(Box)({
  position: "absolute",
  bottom: 24,
  right: 24,
  width: "40%",
  height: "50%",
  backgroundColor: "rgba(79,172,181,0.3)",
  borderRadius: 12,
  filter: "blur(60px)",
  pointerEvents: "none",
});
