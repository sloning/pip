package DBServices;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBWorker {
    private static final String DB_URL = "jdbc:postgresql://localhost:5432/pip";
    private static final String USER = "postgres";
    private static final String PASS = "1234";

//    private static final String DB_URL = "jdbc:postgresql://pg:5432/studs";
//    private static final String USER = "s283990";
//    private static final String PASS = "";

    private static Connection connection;

    public DBWorker() {
        System.out.println("Testing connection to PostgreSQL JDBC");

        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println("PostgreSQL JDBC Driver is not found. Include it in your library path ");
            e.printStackTrace();
            return;
        }
        System.out.println("PostgreSQL JDBC Driver successfully connected");

        try {
            connection = DriverManager.getConnection(DB_URL, USER, PASS);
        } catch (SQLException e) {
            System.out.println("Connection Failed");
            e.printStackTrace();
            return;
        }

        if (connection != null) {
            System.out.println("You successfully connected to database now");
        } else {
            System.out.println("Failed to make connection to database");
        }
    }

    public Connection getConnection() {
        return connection;
    }
}