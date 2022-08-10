import Button from "react-bootstrap/Button";
const SubmitButtonComponent = ({ title }) => {
  return (
    <div className="mb-2">
      <Button variant="primary" size="lg" type="submit">
        {title}
      </Button>
    </div>
  );
};
export { SubmitButtonComponent };
