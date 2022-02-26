import enums from "@/services/enums.js";

export default function Copyright() {
  return <p className="copyright-text">All Rights Reserved © {enums.NAME}</p>;
}
