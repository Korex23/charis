import AnalyticsDashboardCard from "../common/DashboardCards";
import DashboardHeader from "../common/DashboardHeader";
import { Card } from "../ui/card";

const Dashboard = () => {
  return (
    <section className="p-4 sm:p-6 lg:p-7">
      <DashboardHeader />

      <Card className="mt-6 sm:mt-8 lg:mt-10 border-b-[#951E95] border-b-4 bg-white border-t-0 border-l-0 border-r-0">
        <div className="px-3 sm:px-4 lg:pl-3">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div className="min-w-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-1 leading-tight">
                Hi,{" "}
                <span className="font-bold text-[#951E95] font-heading">
                  CharisOne
                </span>
                !
              </h1>

              <p className="text-base sm:text-lg lg:text-[20px] font-heading font-medium leading-snug">
                Here&apos;s what is happening in your organization{" "}
                <span className="text-[#097BBF] font-bold">today.</span>
              </p>
            </div>

            {/* Right: Divider + Date */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="h-px w-full lg:w-[260px] xl:w-[300px] bg-[#5D727C]" />
              <div className="shrink-0 rounded px-4 sm:px-6 lg:px-7 py-1 font-heading text-[#171717] bg-[#951E95]/10 text-sm sm:text-base">
                DD / MM / YY
              </div>
            </div>
          </div>

          <AnalyticsDashboardCard />
        </div>
      </Card>
    </section>
  );
};

export default Dashboard;
