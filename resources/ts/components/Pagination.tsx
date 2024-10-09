import React from "react";
import PageLink from "./PageLink";

// Decalre type props untuk komponen pagination
export type Props = {
    currentPage: number,
    pages: PaginationData[],
    setCurrentPage: (page: number) => void
}

export default function Pagination({
    currentPage,
    pages,
    setCurrentPage
}: Props) {

    return (
        <ul className="pagination">
            {pages.map((page, idx) => (
                <PageLink
                    key={idx}
                    active={page.active}
                    href={page.url}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={page.url == null}
                >
                    {page.label}
                </PageLink>
            ))}
        </ul>
    )
}
