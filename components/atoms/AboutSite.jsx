import MaterialIcon from "@/components/atoms/MaterialIcon";

export default function FooterText() {
  return (
    <p className="footer-text">
      This site was delivered with Next.js and Gulp. <br />
      Hosted on AWS S3. Made with <MaterialIcon icon="favorite" className="love" /> in Poland.
    </p>
  );
}
