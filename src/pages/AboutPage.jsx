import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Acme Inc. is a leading technology company dedicated to innovation and excellence.
            Founded in 2010, we've been at the forefront of developing cutting-edge solutions
            that transform the way businesses operate in the digital age.
          </p>
          <p className="mt-4">
            Our mission is to empower organizations with intuitive, powerful tools that
            drive efficiency and growth. With a team of passionate experts and a commitment
            to continuous improvement, we strive to exceed our customers' expectations and
            shape the future of technology.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;