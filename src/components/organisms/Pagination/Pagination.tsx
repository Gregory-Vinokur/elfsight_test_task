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

  const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (
      /^\d*$/.test(value) &&
      Number(value) >= 1 &&
      totalPages &&
      Number(value) <= totalPages
    ) {
      dispatch(setCurrentPage(Number(value)));
    }
  };

  return (
    <div>
      <button onClick={handlePrevButton}>Prev</button>
      <span>
        <input
          pattern="[0-9]*"
          min="1"
          max={totalPages}
          type="text"
          value={currentPage}
          onInput={handlePageChange}
        />
        /{totalPages}
      </span>
      <button onClick={handleNextButton}>Next</button>
    </div>
  );
};

export default Pagination;
