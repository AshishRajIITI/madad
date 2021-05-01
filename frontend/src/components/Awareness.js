import {
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import mentalHealthImg from "./images/mental-health.jpg";
import vaccineImg from "./images/vaccine-image.jpg";
import preventImg from "./images/prevent-corona.jpg";

const Awareness = () => {
  return (
    <div className="container awareness-div d-flex flex-column-reverse">
      <div className="m-5 blog">
        <Card>
          <CardBody>
            <Row className="blog-row">
              <Col sm={12} lg={6}>
                <CardTitle tag="h1">Stories of Mind</CardTitle>
                <CardText className=" desc">
                  The COVID-19 pandemic has had a major effect on our lives. Not
                  only has it affected the physical health but also the mental
                  well-being of people. There are huge chances that a mental
                  health pandemic will follow as a result of COVID-19. Everyday
                  people are losing their friends and family members. We need to
                  unite together to face these challenges and make sure that no
                  one near us hesiates to share their grief. Learning to cope
                  with stress in a healthy way will make us, the people we care
                  about, and those around us become more resilient. Here, we
                  bring you a dose of positivity by presenting the top 100 blogs
                  which will make you beleive that you are not alone and we all,
                  together, will defeat this pandemic.
                </CardText>
                <a
                  className="btn btn-primary"
                  href="https://neurowellnessspa.com/mental-health-blogs-2020/"
                  target="_blank"
                >
                  Read More
                </a>
              </Col>
              <Col
                sm={12}
                lg={6}
                className="d-flex justify-content-center align-items-center"
              >
                <CardImg
                  width="100%"
                  src={mentalHealthImg}
                  alt="Card image cap"
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
      <div className="m-5 blog">
        <Card>
          <CardBody>
            <Row>
              <Col
                sm={12}
                lg={6}
                className="d-flex justify-content-center align-items-center"
              >
                <CardImg width="100%" src={vaccineImg} alt="Card image cap" />
              </Col>
              <Col sm={12} lg={6}>
                <CardTitle tag="h1">Let's Fight!</CardTitle>
                <CardText className="desc">
                  COVID-19 vaccination is now offering a way to transition out
                  of this phase of the pandemic. Without them, many scientists
                  believe that natural herd immunity would not have been
                  sufficient to restore society to its normal status quo and
                  that it would have resulted in extreme fatality. However, some
                  question the efficacy of these vaccines, especially given the
                  emergence of new strains of the virus. No vaccine is 100 per
                  cent effective. For reasons related to the individual, not all
                  vaccinated persons develop immunity but studies have shown
                  that the number of cases for every vaccine-preventable disease
                  plummets in the years after a vaccine for that disease is made
                  widely available. There are a lot of misconceptions going
                  around regarding vaccines because of which a lot of people are
                  not getting vaccinated. Here are the popular myths about
                  vaccination which are busted.
                </CardText>
                <a
                  className="btn btn-primary"
                  href="https://www.outlookindia.com/website/story/opinion-myths-and-fears-around-the-covid-19-vaccine-and-the-fact-check/372179"
                  target="_blank"
                >
                  Read More
                </a>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
      <div className="m-5 blog">
        <Card>
          <CardBody>
            <Row className="blog-row">
              <Col sm={12} lg={6}>
                <CardTitle tag="h1">Be Safe</CardTitle>
                <CardText className=" desc">
                  The rate of spread of COVID-19 virus is disastrous. Living in
                  these circumstances can be tough for young people for their
                  social, physical and mental wellbeing. The only way to protect
                  ourselves is by strictly following the preventive measures
                  against the COVID-19 virus. The Centers for Disease Control
                  and Prevention states that the virus that causes COVID-19
                  spreads mainly between people who are in close contact with
                  one another. The virus can be contracted from respiratory
                  droplets produced when an infected person coughs or sneezes or
                  by touching a surface that has the virus on it and then
                  touching their face. Thus we need to limit contact with others
                  by staying home and practicing good respiratory and hand
                  hygiene. This includes frequent hand washing, coughing into
                  your elbow, and other steps as given in the link. Click on the
                  button to get more information.
                </CardText>
                <a
                  className="btn btn-primary"
                  href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                  target="_blank"
                >
                  Read More
                </a>
              </Col>
              <Col
                sm={12}
                lg={6}
                className="d-flex justify-content-center align-items-center"
              >
                <CardImg width="100%" src={preventImg} alt="Card image cap" />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Awareness;
