package com.hibernatingbeaver.example.services;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.hibernatingbeaver.example.models.Category;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;

public class ExportCategoriesCSV {

  private List<Category> listCategory;

  public ExportCategoriesCSV(List<Category> categoryList) {
    this.listCategory = categoryList;
  }

  private void createCSV(PrintWriter writer) {
    try {
      CSVPrinter csvPrinter = new CSVPrinter(writer, CSVFormat.RFC4180);

      csvPrinter.printRecord("ID", "Category", "Description");

      for (Category category : listCategory) {
        List<String> data = Arrays.asList(category.getCategoryId().toString(), category.getCategoryName(),
            category.getCategoryDescription());
        csvPrinter.printRecord(data);
      }

      csvPrinter.flush();
      writer.flush();

      csvPrinter.close();
      writer.close();

    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  public void generateCSV(HttpServletResponse response) throws IOException {
    createCSV(response.getWriter());
  }
}
