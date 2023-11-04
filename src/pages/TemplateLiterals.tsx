import {Toast} from '../components/templateLiterals/Toast';

/**
 * Position prop can be one of this:
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

export const TemplateLiterals = () => {
  return (
    <div>
      <Toast position="center-top" />
    </div>
  );
};
