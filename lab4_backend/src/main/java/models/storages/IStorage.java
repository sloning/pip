package models.storages;

import java.util.List;

public interface IStorage<Entity> {
    void addNewPoint(Entity entity);

    List<Entity> getList();

    void clear();
}
