import React from 'react';
import DashboardStatsGrid from '../components/DashboardStatsGrid';
import TransactionChart from '../components/TransactionChart';

export default function Dashboard() {
	return (
		<div className="container flex flex-col gap-4">
			<div className='bg-gray-100'>
				<h1 className="p-2 text-[15px]">Hello, User</h1>
			</div>
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				
			</div>
		</div>
	)
}
