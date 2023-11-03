import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Props} from '../../pages/Props';
import {IntermediateProps} from '../../pages/IntermediateProps';
import {StyleProps} from '../../pages/StyleProps';
import {EventProps} from '../../pages/EventProps';
import {Theme} from '../../pages/Theme';
import {UserTheme} from '../../pages/UserTheme';
import {ClassComponent} from '../../pages/ClassComponent';
import {ComponentProp} from '../../pages/ComponentProp';
import {GenericProp} from '../../pages/GenericProp';
import {RestrictingProps} from '../../pages/RestrictingProps';

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/props" replace={true} />} />
          <Route path="/props" element={<Props />} />
          <Route path="/intProps" element={<IntermediateProps />} />
          <Route path="/styleProps" element={<StyleProps />} />
          <Route path="/eventProps" element={<EventProps />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/userTheme" element={<UserTheme />} />
          <Route path="/classComp" element={<ClassComponent />} />
          <Route path="/componentProp" element={<ComponentProp />} />
          <Route path="/genericProp" element={<GenericProp />} />
          <Route path="/restrictProp" element={<RestrictingProps />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
