const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Construyendo Capital — Por Ramiro Severino
      </p>
      <p className="text-xs text-muted-foreground mt-2">
        Este material es educativo. No constituye asesoramiento financiero profesional.
      </p>
    </footer>
  );
};

export default Footer;
