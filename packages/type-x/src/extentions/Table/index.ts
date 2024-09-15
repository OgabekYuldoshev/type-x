import { Table } from "@tiptap/extension-table";
import { TableRow, type TableRowOptions } from "@tiptap/extension-table-row";
import { TableHeader, type TableHeaderOptions } from "@tiptap/extension-table-header";
import { TableCell, type TableCellOptions } from "@tiptap/extension-table-cell";

export interface TableOptions {
  HTMLAttributes: Record<string, any>;

  row: Partial<TableRowOptions>;
  header: Partial<TableHeaderOptions>;
  cell: Partial<TableCellOptions>;
}

export const TableExtension = Table.extend<TableOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      resizable: true,
      lastColumnResizable: true,
      allowTableNodeSelection: false,
    };
  },
  addExtensions() {
    return [
      TableRow.configure(this.options.row),
      TableHeader.configure(this.options.header),
      TableCell.configure(this.options.cell),
    ];
  },
}).configure();

export { default as TableComponent } from "./table-component";
export { default as TableBubbleMenu } from "./table-buble-menu";
