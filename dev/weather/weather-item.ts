export class WeatherItem {
    public cityName:string;
    public description:string;
    public temperature:number;

    constructor(cityName:string, description: string, temperature:number) {
        this.cityName = cityName;
        this.description = description;
        this.temperature = temperature;
    }
}