const Quiz1 = () => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
      }}
    >
      <Button bg="primary" br="hard"></Button>
      <Button bg="primary" br="smooth"></Button>
      <Button bg="primary" br="circle"></Button>
      <Button bg="secondary" br="hard"></Button>
      <Button bg="secondary" br="smooth"></Button>
      <Button bg="secondary" br="circle"></Button>
    </section>
  );
};
