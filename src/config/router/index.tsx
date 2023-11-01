import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Props} from '../../pages/Props';

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<Props />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
