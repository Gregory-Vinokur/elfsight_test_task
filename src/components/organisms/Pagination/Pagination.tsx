import { useDispatch, useSelector } from 'react-redux';
import { IState } from './../../../interfaces/IState';
import { setCurrentPage } from '../../../store/Pagination/PaginationSlice';

interface PaginationProps {
  totalPages: number | undefined;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state: IState) => state.pagination);

  const handleNextButton = () => {
    if (currentPage >= 1 && totalPages && currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePrevButton = () => {
    if (currentPage > 1 && totalPages && currentPage <= totalPages) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <div>
      <button onClick={handlePrevButton}>Prev</button>
      <span>
        {currentPage}/{totalPages}
      </span>
      <button onClick={handleNextButton}>Next</button>
    </div>
  );
};

export default Pagination;
