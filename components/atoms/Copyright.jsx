import enums from "@/services/enums.js";

export default function FooterCopyright() {
  return <p className="footer-text">All Rights Reserved © {enums.NAME}</p>;
}
