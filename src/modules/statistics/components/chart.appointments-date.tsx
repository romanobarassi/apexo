import { BarChartComponent } from "@common-components";
import { text } from "@core";
import { Appointment } from "@modules";
import { formatDate } from "@utils";
import { computed } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";

@observer
export class AppointmentsByDateChart extends React.Component<{
	selectedAppointmentsByDay: {
		appointments: Appointment[];
		day: Date;
	}[];
	dateFormat: string;
}> {
	@computed
	get values() {
		const initialValue: {
			missed: number[];
			outstanding: number[];
			paid: number[];
			days: string[];
		} = {
			days: [],
			missed: [],
			outstanding: [],
			paid: []
		};

		return this.props.selectedAppointmentsByDay.reduce((acc, val) => {
			acc.paid.push(val.appointments.filter(a => a.isPaid).length);
			acc.outstanding.push(
				val.appointments.filter(a => a.isOutstanding).length
			);
			acc.missed.push(val.appointments.filter(a => a.missed).length);
			acc.days.push(formatDate(val.day.getTime(), this.props.dateFormat));
			return acc;
		}, initialValue);
	}
	render() {
		return (
			<BarChartComponent
				{...{
					height: 400,
					data: {
						xLabels: this.values.days,
						bars: [
							{
								label: text("Missed"),
								data: this.values.missed
							},
							{
								label: text("Paid"),
								data: this.values.paid
							},
							{
								label: text("Outstanding"),
								data: this.values.outstanding
							}
						]
					}
				}}
			/>
		);
	}
}
