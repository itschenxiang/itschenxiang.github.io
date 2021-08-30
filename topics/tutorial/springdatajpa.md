# Spring Data JPA入门
## 基本示例
#### 获取起步配置
```
$ git clone https://github.com/spring-guides/gs-accessing-data-jpa.git
$ cd into gs-accessing-data-jpa/initial
```
#### 定义Entity
```java
package com.example.accessingdatajpa.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;

    protected Customer() {}

    public Customer(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%d, firstName='%s', lastName='%s']",
                id, firstName, lastName);
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}

```
#### 定义repository
```java
package com.example.accessingdatajpa.repository;

import com.example.accessingdatajpa.entity.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CustomerRepository extends CrudRepository<Customer,Long> {

    List<Customer> findByLastName(String lastName);

    Customer findById(long id);
}

```

#### 测试
数据库为H2（内存数据库）。

```java
package com.example.accessingdatajpa.repository;

import com.example.accessingdatajpa.entity.Customer;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CustomerRepositoryTest {

    private static final Logger log = LoggerFactory.getLogger(CustomerRepositoryTest.class);

    @Autowired
    private CustomerRepository repository;

    @BeforeEach
    public void beforeEach() {
        // save a few customers
        repository.save(new Customer("Jack", "Bauer"));
        repository.save(new Customer("Chloe", "O'Brian"));
        repository.save(new Customer("Kim", "Bauer"));
        repository.save(new Customer("David", "Palmer"));
        repository.save(new Customer("Michelle", "Dessler"));
        repository.save(new Customer("chen","chen"));
        log.info("-------------------------------");
    }

    @AfterEach
    public void afterEach() {
        log.info("-------------------------------");
    }
    
    @Test
    public void customerrepositoryBasicTest() {

        // fetch all customers
        log.info("Customers found with findAll():");
        log.info("-------------------------------");
        for (Customer customer : repository.findAll()) {
            log.info(customer.toString());
        }
        log.info("");

        // fetch an individual customer by ID
        Customer customer = repository.findById(1L);
        log.info("Customer found with findById(1L):");
        log.info("--------------------------------");
        log.info(customer.toString());
        log.info("");

        // fetch customers by last name
        log.info("Customer found with findByLastName('Bauer'):");
        log.info("--------------------------------------------");
        repository.findByLastName("Bauer").forEach(bauer -> {
            log.info(bauer.toString());
        });
        // for (Customer bauer : repository.findByLastName("Bauer")) {
        //  log.info(bauer.toString());
        // }
        log.info("");
    }
}
```

#### 参考链接
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)

## 更多相关特性
> 更多的特性也基于前面的示例。

#### @Query
在`CustomerRepository`中声明如下方法：
```java
@Query("select c from Customer c where c.firstName = c.lastName")
List<Customer> findEqualFirstNameAndLastName();
```

#### @Query参数
