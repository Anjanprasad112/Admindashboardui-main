export function getOrderStatus(status) {
	switch (status) {
		case 'WAITING':
			return (
				<span className="capitalize rounded-md text-lg text-yellow-600 ">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'ASSIGNED':
			return (
				<span className="capitalize rounded-md text-lg text-sky-600 ">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'ONTHEWAY':
			return (
				<span className="capitalize  rounded-md text-lg text-teal-600 ">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'ONSITE':
			return (
				<span className="capitalize  rounded-md text-lg text-purple-600 ">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'TOWING':
			return (
				<span className="capitalize rounded-md text-lg text-violet-600 ">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)

		case 'COMPLETED':
			return (
				<span className="capitalize  rounded-md text-lg text-green-600 ">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'CANCELLED':
			return (
				<span className="capitalize rounded-md text-lg text-red-600 ">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
			 
		default:
			return (
				<span className="capitalize  rounded-md text-lg text-gray-600 ">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
	}
}
