import { BatteryInput } from "./battery.interfaces";

export const manageBattery = (inputs: number[]): BatteryInput => {
    let battery = 50;
    let batteryStatus: BatteryInput = {
        battery_fully_charged: 0,
        battery_low: 0,
        battery_empty: 0,
        last_battery_percent: 0
    };

    inputs.forEach((change, index) => {
        change = Number(change);
        battery += change > 0 ? change * 2 : change; // Adjust battery level

        battery = Math.min(100, Math.max(0, battery)); // battery 0 - 100

        if (battery === 100 && change > 0) {
            console.log(`Battery Fully Charged (iterasi ${index + 1})`);
            batteryStatus.battery_fully_charged++;
        } else if (battery === 0) {
            console.log(`Battery is Empty, Please Charge (iterasi ${index + 1})`);
            batteryStatus.battery_empty++;
        } else if (battery <= 30) {
            console.log(`Battery Low (iterasi ${index + 1})`);
            batteryStatus.battery_low++;
        }
    });

    batteryStatus.last_battery_percent = battery;
    return batteryStatus;
}