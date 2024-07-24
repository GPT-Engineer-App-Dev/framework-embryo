import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Commitment to Your Privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            At Acme Inc., we are committed to protecting your privacy and ensuring the security
            of your personal information. This Privacy Policy outlines how we collect, use,
            and safeguard your data when you use our services or visit our website.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Information We Collect</h3>
          <p>
            We collect information that you provide directly to us, such as when you create
            an account, use our services, or contact our support team. This may include your
            name, email address, and other relevant details.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">How We Use Your Information</h3>
          <p>
            We use the information we collect to provide, maintain, and improve our services,
            to communicate with you, and to comply with legal obligations. We do not sell your
            personal information to third parties.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Your Rights and Choices</h3>
          <p>
            You have the right to access, correct, or delete your personal information. You
            can also opt out of certain data collection and use practices. For more information
            on exercising these rights, please contact us.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPage;