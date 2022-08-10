import Button from "react-bootstrap/Button";
const ButtonComponent = ({ title }) => {
  return (
    <div className="mb-2">
      <Button variant="primary" size="lg">
        {title}
      </Button>
    </div>
  );
};
export { ButtonComponent };
