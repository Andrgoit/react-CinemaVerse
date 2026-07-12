import Pagination from "@rc-component/pagination";
import enUS from "@rc-component/pagination/locale/en_US";
import "./index.css";

export default function PaginationComponent({
  page,
  total_pages,
  pageChanger,
}) {
  return (
    <div className="flex justify-center">
      <Pagination
        current={page}
        total={total_pages}
        onChange={pageChanger}
        hideOnSinglePage
        locale={enUS}
      />
    </div>
  );
}
