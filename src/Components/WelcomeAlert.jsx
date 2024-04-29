import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function WelcomeAlert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Welcome!</Alert.Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, nam a mollitia veritatis natus impedit
          voluptas nesciunt dicta ut praesentium minus architecto assumenda!
        </p>
      </Alert>
    );
  }
}

export default WelcomeAlert;
