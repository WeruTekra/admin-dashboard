import Activity from "./Activity";
import Chart from "./Chart";
import StatsGrid from "./StatsGrid";
import Table from "./Table";


function Dashboard() {
    return (
        <div className="space-y-6">
            {/* Stats grid */}
            <StatsGrid />
            {/* Chat section */}
            <Chart />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                    <Table />
                </div>
                <div>
                    <Activity />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;