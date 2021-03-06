package test.profile.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import test.mybatis.SqlMapConfig;
import test.profile.dto.IntsDto;
//관심사 dao
public class IntsDao {
	private static IntsDao dao;
	private static SqlSessionFactory factory;
	private IntsDao() {}
	public static IntsDao getInstance() {
		if(dao==null) {
			dao=new IntsDao();
			factory=SqlMapConfig.getSqlSession();
		}
		return dao;
	}
	//저장(insert)
	public void insert(IntsDto dto) {
		SqlSession session = null;
		try {
			session=factory.openSession(true);
			session.insert("ints.insert",dto);
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			session.close();
		}
	}
	//수정(update)
	public void update(IntsDto dto) {
		SqlSession session = null;
		try {
			session=factory.openSession(true);
			session.update("ints.update",dto);
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			session.close();
		}
	}
	//삭제(delete)
	public void delete(IntsDto dto) {
		SqlSession session=null;
		try {
			session=factory.openSession(true);
			session.delete("ints.delete", dto);
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			session.close();
		}
	}
	//정보 리턴(select)
	public List<IntsDto> getList(String id) {
		SqlSession session = null;
		List<IntsDto> list = null;
		try {
			session = factory.openSession();
			list = session.selectList("ints.getList", id);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			session.close();
		}
		return list;
	}
	//하나의 정보 리턴
	public IntsDto getData(IntsDto dto) {
		SqlSession session = null;
		IntsDto resultDto = new IntsDto();
		try {
			session = factory.openSession();
			resultDto = session.selectOne("ints.getData", dto);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			session.close();
		}
		return resultDto;
	}
}
