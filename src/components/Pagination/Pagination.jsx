import Pagination from "rc-pagination";

export default function PaginationComponent({
  page,
  total_pages,
  pageChanger,
}) {
  return (
    <div>
      <Pagination current={page} total={total_pages} onChange={pageChanger} />
    </div>
  );
}
