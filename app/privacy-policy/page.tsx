import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | React2Tech",
  description: "Privacy Policy for React2Tech",
}

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl mx-auto py-6">
      <Card className="border shadow-md">
        <CardHeader className="bg-muted">
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
          <CardDescription>
            Last Updated: {new Date().toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8 px-6 md:px-8">
          <div className="space-y-8">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary">
                1. Introduction
              </h2>
              <p>
                Welcome to React2Tech. This Privacy Policy explains our approach to data and privacy when you use our website.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary">
                2. No Data Collection
              </h2>
              <p>
                React2Tech does not collect, store, or process any personal data from users. We operate with a strict no-data-collection policy.
              </p>
              <div className="bg-blue-50 [.dark_&]:bg-blue-950/80 p-4 rounded-md border-l-4 border-blue-500">
                <p className="font-medium text-blue-800 [.dark_&]:text-blue-100">
                  We do not:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-blue-800 [.dark_&]:text-blue-100">
                  <li>Use cookies or tracking technologies</li>
                  <li>Collect personal information</li>
                  <li>Store user data on our servers</li>
                  <li>Share any information with third parties</li>
                </ul>
              </div>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary">
                3. Local Browser Storage
              </h2>
              <p>
                Quiz progress is temporarily stored in your browser&apos;s local storage for your convenience. This data:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Remains exclusively on your device</li>
                <li>Is never transmitted to our servers</li>
                <li>Is automatically cleared when you clear your browser data</li>
                <li>Is used solely to maintain your current quiz session</li>
              </ul>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-destructive">
                4. Educational Content Disclaimer
              </h2>
              <div className="bg-red-50 [.dark_&]:bg-red-950/80 p-4 rounded-md border-l-4 border-red-500">
                <p className="text-red-800 [.dark_&]:text-red-100">
                  The educational content on React2Tech, including quiz questions and explanations, was generated with the assistance of artificial intelligence. While we strive for accuracy, we cannot guarantee that all information is completely error-free or up-to-date with the latest React developments.
                </p>
                <p className="text-red-800 [.dark_&]:text-red-100 mt-3">
                  React2Tech assumes no responsibility if the educational content contains inaccuracies or if users learn incorrect information from our platform. Users are encouraged to verify information through official React documentation and other reliable sources.
                </p>
              </div>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary">
                5. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary">
                6. Contact
              </h2>
              <p>
                If you have any questions about this Privacy Policy, you can contact us through our website.
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