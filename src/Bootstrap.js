import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Tabs, Tab} from 'react-bootstrap'

function Bootstrap()  {
return (
    <div>
    <h3>Bootstrap componentleri</h3>
    <Button>Button</Button>
    <Button variant = 'success'>Button</Button>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
    </div>
)
}

export default Bootstrap