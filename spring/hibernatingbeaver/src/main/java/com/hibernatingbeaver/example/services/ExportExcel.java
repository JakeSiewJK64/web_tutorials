package com.hibernatingbeaver.example.services;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import com.hibernatingbeaver.example.models.Category;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExportExcel {

  private XSSFWorkbook workbook;

  private XSSFSheet sheet;

  private List<Category> categoryList;

  public ExportExcel(List<Category> listRecords) {
    this.categoryList = listRecords;
    workbook = new XSSFWorkbook();
  }

  private void writeHeader() {
    sheet = workbook.createSheet();
    Row row = sheet.createRow(0);

    createCell(row, 0, "Category", getHeaderStyle());
    createCell(row, 1, "Description", getHeaderStyle());
  }

  private CellStyle getHeaderStyle() {
    CellStyle style = workbook.createCellStyle();

    XSSFFont font = workbook.createFont();
    font.setBold(true);
    font.setFontHeight(16);
    style.setFont(font);

    return style;
  }

  private CellStyle getBodyCellStyle() {
    CellStyle style = workbook.createCellStyle();
    XSSFFont font = workbook.createFont();

    font.setFontHeight(14);
    style.setFont(font);

    return style;
  }

  private void createCell(Row row, int columnCount, Object value, CellStyle style) {
    sheet.autoSizeColumn(columnCount);
    Cell cell = row.createCell(columnCount);

    // type check for value
    if (value instanceof Integer) {
      cell.setCellValue((Integer) value);
    } else if (value instanceof Long) {
      cell.setCellValue((Long) value);
    } else if (value instanceof Boolean) {
      cell.setCellValue((Boolean) value);
    } else {
      cell.setCellValue((String) value);
    }

    cell.setCellStyle(style);
  }

  private void write() {
    int rowCount = 1;

    for (Category category : categoryList) {
      Row row = sheet.createRow(rowCount++);
      int columnCount = 0;

      createCell(row, columnCount++, category.getCategoryName(), getBodyCellStyle());
      createCell(row, columnCount++, category.getCategoryDescription(), getBodyCellStyle());
    }
  }

  public void generateExcel(HttpServletResponse response) throws IOException {
    writeHeader();
    write();
    ServletOutputStream outputStream = response.getOutputStream();
    workbook.write(outputStream);
    workbook.close();
    outputStream.close();
  }
}
