import { Building2Icon, ThumbsUpIcon, Users2Icon } from "lucide-react";

export default function IconSectionCentredDescriptionWithIconBlocks() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-16 lg:py-16">
        <div className=" mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Why Choose Our React Course?</h2>
              <p className="mt-3 text-muted-foreground">
                For as long as there have been cities, the public square has
                been a fundamental part of the urban landscape - an open,
                approachable space to meet and engage with friends and
                neighbours. Space aims to capture this spirit of bringing people
                together in an exciting, welcoming environment.
              </p>
            </div>
            <div className="space-y-4 lg:space-y-6">
              {/* Icon Block */}
              <div className="flex">
                
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  📚 Comprehensive Curriculum
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  Covering everything from JSX, state management, hooks, to advanced topics like context API and performance optimization.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  🖥️ Hands-On Projects
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  Build real-world applications, from simple components to full-scale apps, reinforcing your learning with practical experience.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  🌟 Expert Instructors
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  Learn from industry professionals who bring real-world experience and insights to the course.

                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  👨‍💻 Flexible Learning
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  Access the course materials anytime, anywhere, and learn at your own pace.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  ✅ Certification: 
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  Receive a certificate upon completion to showcase your skills to employers and clients.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
