export type QueryParamType =
  | string[][]
  | Record<string, string>
  | string
  | URLSearchParams;

export interface IChildren {
  children?: React.ReactNode;
}

export type LessonTypes = {
  id: number;
  title: string;
  completed: boolean;
};

export interface IAppContext {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  status: string;
  lessons: LessonTypes[];
}

export interface ILoginData {
  username: string;
  password: string;
}

export interface IClassName {
  className?: string;
}

export interface ISvgIconProps extends IClassName {
  fill?: string;
  size?: number;
}

export interface ILoginData {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  role: string;
  designation: string;
}

export interface IClassName {
  className?: string;
}
