class Helper {
  static calculateRotation = (value: number, constant: number) => {
    return value * constant;
  };

  static getImgUrl = (name: string) => {
    return new URL(`${name}`, import.meta.url).href;
  };

  static calcPosition = (value: number): number => {
    return value * 40 + 60;
  };
}
export default Helper;
