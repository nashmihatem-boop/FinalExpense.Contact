import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#123f2a",
        }}
      >
        <svg width="116" height="116" viewBox="0 0 32 32" fill="none">
          <path d="M11 8 L19 16 L11 24" stroke="#eef7f0" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 8 L26 16 L18 24" stroke="#bd7813" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size
  );
}
