import user from "./user";

export default interface appContextValues
{
    user:user|undefined;
    setUser:React.Dispatch<React.SetStateAction<user | undefined>>;
}
