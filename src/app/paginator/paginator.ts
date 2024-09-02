import { MatPaginatorIntl } from "@angular/material/paginator";

export class MatPaginatorIntlCro extends MatPaginatorIntl {
    override itemsPerPageLabel = 'ITEMS POR PÁGINA';
    override nextPageLabel = 'PÁGINA SEGUINTE';
    override previousPageLabel = 'PÁGINA ANTERIOR';
    override firstPageLabel = 'PRIMERA PÁGINA';
    override lastPageLabel = 'ÚLTIMA PÁGINA';
  
    override getRangeLabel = function (page, pageSize, length) {
      if (length === 0 || pageSize === 0) {
        return '0 de ' + length;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
  
      const endIndex =
        startIndex < length
          ? Math.min(startIndex + pageSize, length)
          : startIndex + pageSize;
      return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    };
  }
  