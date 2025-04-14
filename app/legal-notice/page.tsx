import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Legal Notice | React2Tech",
  description: "Legal Notice for React2Tech",
}

export default function LegalNotice() {
  return (
    <div className="container max-w-4xl mx-auto py-6">
      <Card className="border shadow-md">
        <CardHeader className="bg-muted">
          <CardTitle className="text-3xl">Legal Notice</CardTitle>
          <CardDescription>
            Last Updated: {new Date().toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8 px-6 md:px-8">
          <div className="space-y-8">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-destructive">
                1. Disclaimer of Liability
              </h2>
              <div className="bg-red-50 [.dark_&]:bg-red-950/80 p-4 rounded-md border-l-4 border-red-500">
                <p className="text-red-800 [.dark_&]:text-red-100">
                  The information provided on React2Tech is for general informational and educational purposes only. All content on this website, including quiz questions, answers, and explanations, was generated with the assistance of artificial intelligence and may contain inaccuracies or errors.
                </p>
                <p className="text-red-800 [.dark_&]:text-red-100 mt-3">
                  React2Tech makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website. Any reliance you place on such information is strictly at your own risk.
                </p>
                <p className="text-red-800 [.dark_&]:text-red-100 mt-3">
                  In no event will React2Tech be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or the information presented within it.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-destructive">
                2. Educational Content Disclaimer
              </h2>
              <div className="bg-red-50 [.dark_&]:bg-red-950/80 p-4 rounded-md border-l-4 border-red-500">
                <p className="text-red-800 [.dark_&]:text-red-100">
                  The quiz questions, answers, and explanations on React2Tech were created with the assistance of artificial intelligence. While we strive for accuracy, we cannot guarantee that all information is completely error-free or up-to-date with the latest React developments.
                </p>
                <p className="text-red-800 [.dark_&]:text-red-100 mt-3">
                  React2Tech assumes no responsibility if the educational content contains inaccuracies or if users learn incorrect information from our platform. Users are encouraged to verify information through official React documentation and other reliable sources.
                </p>
              </div>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary">
                3. External Links
              </h2>
              <p>
                This website may contain links to external websites that are not provided or maintained by React2Tech. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary">
                4. Intellectual Property
              </h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, icons, images, and software, is the property of React2Tech and is protected by copyright and other intellectual property laws.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary">
                5. Governing Law
              </h2>
              <p>
                This legal notice shall be governed by and construed in accordance with applicable laws. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary">
                6. Changes to This Legal Notice
              </h2>
              <p>
                React2Tech reserves the right to make changes to this legal notice at any time. We will notify users of any changes by updating the &quot;Last Updated&quot; date at the top of this page.
              </p>
            </section>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-6 pb-6 bg-muted">
          <Button 
            asChild 
            className="px-8 py-2 h-auto [.light_&]:shadow-[0_4px_8px_rgba(0,0,0,0.1)] [.dark_&]:shadow-[0_4px_8px_rgba(255,255,255,0.1)] [.light_&]:hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] [.dark_&]:hover:shadow-[0_6px_12px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}