package models.storages;

import java.util.List;

public interface IStorage<Entity> {
    void addNewPoint(Entity entity);

    List<Entity> getPointsList();

    void clear();
}
