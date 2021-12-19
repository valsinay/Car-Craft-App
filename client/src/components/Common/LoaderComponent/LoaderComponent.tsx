import * as React from "react";
import styles from './LoaderComponent.module.scss';
import { Spinner, SpinnerSize } from "office-ui-fabric-react";

interface LoaderComponentProps {
  message?: string;
  className?: any;
  relativePosition?: boolean;
}

const LoaderComponent: React.SFC<LoaderComponentProps> = ({ message, className, relativePosition }) => {

  return (
    <div className={`${className ? className : styles.loaderWrapper} ${relativePosition ? styles.relativeWrapper : ""}`}>
      <Spinner size={SpinnerSize.medium} label={message} />
    </div>
  );
};


export default LoaderComponent;
