import AdminSignIn from "@/components/features/SignIn/AdminSignIn";
import DoctorSignIn from "@/components/features/SignIn/DoctorSignIn";
import PatientSignIn from "@/components/features/SignIn/PatientSignIn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <main className="grid min-h-screen w-screen place-items-center bg-white px-4 dark:bg-black">
      <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-md bg-white md:flex-row dark:bg-black">
        {/* LEFT IMAGE */}
        <section className="relative h-48 w-full bg-black md:h-auto md:w-1/2 dark:bg-white">
          <Image
            src="/assets/images/login/hms-login.png"
            alt="login-image"
            fill
            className="object-cover"
            priority
          />
        </section>

        {/* RIGHT FORM */}
        <section className="flex w-full items-center justify-center bg-white px-4 py-8 md:w-1/2 dark:bg-black">
          <div className="flex w-full max-w-sm flex-col items-center gap-4">
            <Typography variant="h2" color="primary">
              Login
            </Typography>

            <Tabs defaultValue="patient" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="patient" className="flex-1">
                  Patient
                </TabsTrigger>
                <TabsTrigger value="doctor" className="flex-1">
                  Doctor
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex-1">
                  Admin
                </TabsTrigger>
              </TabsList>

              <TabsContent value="patient">
                <PatientSignIn />
              </TabsContent>

              <TabsContent value="doctor">
                <DoctorSignIn />
              </TabsContent>

              <TabsContent value="admin">
                <AdminSignIn />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
