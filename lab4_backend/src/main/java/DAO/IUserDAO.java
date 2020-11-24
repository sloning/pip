package DAO;

public interface IUserDAO<Entity> {
    Entity getUserFromDB(String login);

    void addNewUserToDB(Entity entity);
}
